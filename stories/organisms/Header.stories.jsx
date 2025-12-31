import { Header } from '../../src/organisms/Header';

export default {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6AOPb1d5gup4V5XImuyYWJ/Design-System---Personal?node-id=4212-396&t=8A0CJzgnQdx7UlLp-1',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    navigation: {
      control: 'object',
      description: 'Navigation items array',
    },
    actions: {
      control: 'object',
      description: 'Action buttons array',
    },
  },
};

export const Default = {
  args: {
    navigation: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    actions: [
      { label: 'Sign In', primary: false, size: 'small' },
      { label: 'Sign Up', primary: true, size: 'small' },
    ],
  },
};

export const Minimal = {
  args: {
    logo: <div className="text-xl font-bold text-blue-600">MyApp</div>,
  },
};

export const WithNavigation = {
  args: {
    navigation: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};

export const WithActions = {
  args: {
    actions: [
      { label: 'Login', primary: false, size: 'medium' },
      { label: 'Get Started', primary: true, size: 'medium' },
    ],
  },
};
