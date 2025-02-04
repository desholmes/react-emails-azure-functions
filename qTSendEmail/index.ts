import { AzureFunction, Context } from '@azure/functions';
import { Resend } from 'resend';
import { render } from '@react-email/components';
import { RESEND_API_KEY, RESEND_FROM_EMAIL } from '../constants';
import { getEmailTemplate, templateNameExists } from '../utils';

interface EmailMessage {
  templateName: string;
  to: string;
  subject: string;
}

const qTSendEmail: AzureFunction = async function (
  context: Context,
  emailMessage: EmailMessage,
): Promise<void> {
  const { templateName, to, subject } = emailMessage;
  if (!templateNameExists(templateName)) {
    context.log.error(`Invalid Template Name: ${templateName}`);
    return;
  }

  try {
    const emailHtml = await render(getEmailTemplate(templateName));
    const resend = new Resend(RESEND_API_KEY);
    resend.emails.send({
      to: to,
      from: RESEND_FROM_EMAIL,
      subject: subject,
      html: emailHtml,
    });
  } catch (error) {
    context.log.error(`qTSendEmail: Failed with error`, error);
  }
};

export default qTSendEmail;
