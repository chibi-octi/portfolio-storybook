import { Heading } from '../../src/atoms/Heading';

export default {
  title: 'Atoms/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level (h1-h6)',
    },
    children: {
      control: 'text',
      description: 'Heading text',
    },
  },
};

export const H1 = {
  args: {
    level: 1,
    children: 'Heading 1',
  },
};

export const H2 = {
  args: {
    level: 2,
    children: 'Heading 2',
  },
};

export const H3 = {
  args: {
    level: 3,
    children: 'Heading 3',
  },
};

export const H4 = {
  args: {
    level: 4,
    children: 'Heading 4',
  },
};

export const H5 = {
  args: {
    level: 5,
    children: 'Heading 5',
  },
};

export const H6 = {
  args: {
    level: 6,
    children: 'Heading 6',
  },
};
