import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export const HelloWorld = () => (
  <Html>
    <Head />
    <Preview>Hello There!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>A Logo Here</Section>
        <Heading style={h1}>A Title</Heading>
        <Text style={heroText}>I am a helpful, short, introduction.</Text>

        <Section style={codeBox}>
          <Text style={confirmationCodeText}>Hello World!</Text>
        </Section>

        <Text style={text}>More text could be added under here too.</Text>
        <Section>
          <Link
            style={footerLink}
            href="https://dholmes.co.uk/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Des Holmes Blog
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://github.com/desholmes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Des Holmes GitHub
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://react.email/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Email
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview"
            target="_blank"
            rel="noopener noreferrer"
            data-auth="NotApplicable"
            data-linkindex="6"
          >
            Azure Functions
          </Link>
          <Text style={footerText}>
            &copy;2025 Some company, 1234 Some Street, Some City, Some Country
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default HelloWorld;

const footerText = {
  fontSize: '12px',
  color: '#b7b7b7',
  lineHeight: '15px',
  textAlign: 'left' as const,
  marginBottom: '50px',
};

const footerLink = {
  color: '#b7b7b7',
  textDecoration: 'underline',
};

const main = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: '0 auto',
  padding: '0px 20px',
};

const logoContainer = {
  marginTop: '32px',
  backgroundColor: '#000',
  color: '#fff',
  height: '80px',
  padding: '10px',
  textAlign: 'center' as const,
  textTransform: 'uppercase' as const,
  fontSize: '32px',
  fontWeight: '700',
};

const h1 = {
  color: '#1d1c1d',
  fontSize: '36px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '0',
  lineHeight: '42px',
};

const heroText = {
  fontSize: '20px',
  lineHeight: '28px',
  marginBottom: '30px',
};

const codeBox = {
  background: 'rgb(245, 244, 245)',
  borderRadius: '4px',
  marginBottom: '30px',
  padding: '40px 10px',
};

const confirmationCodeText = {
  fontSize: '30px',
  textAlign: 'center' as const,
  verticalAlign: 'middle',
};

const text = {
  color: '#000',
  fontSize: '14px',
  lineHeight: '24px',
};
