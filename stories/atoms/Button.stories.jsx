import { Button } from '../../src/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6AOPb1d5gup4V5XImuyYWJ/Design-System---Personal?node-id=4212-396&t=8A0CJzgnQdx7UlLp-1',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'boolean',
      description: 'Primary button variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
    },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
    size: 'medium',
  },
};

export const Secondary = {
  args: {
    primary: false,
    label: 'Button',
    size: 'medium',
  },
};

export const Small = {
  args: {
    primary: true,
    label: 'Button',
    size: 'small',
  },
};

export const Large = {
  args: {
    primary: true,
    label: 'Button',
    size: 'large',
  },
};

export const Disabled = {
  args: {
    primary: true,
    label: 'Button',
    disabled: true,
  },
};
