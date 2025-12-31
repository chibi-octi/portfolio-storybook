import { Card } from '../../src/molecules/Card';
import { Button } from '../../src/atoms/Button';

export default {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6AOPb1d5gup4V5XImuyYWJ/Design-System---Personal?node-id=4212-396&t=8A0CJzgnQdx7UlLp-1',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined'],
      description: 'Card visual variant',
    },
    title: {
      control: 'text',
      description: 'Card title',
    },
    description: {
      control: 'text',
      description: 'Card description',
    },
  },
};

export const Default = {
  args: {
    title: 'Card Title',
    description: 'This is a default card with a title and description.',
  },
};

export const WithContent = {
  args: {
    title: 'Card with Content',
    description: 'This card includes additional content.',
    children: (
      <div className="space-y-2">
        <p className="text-sm text-gray-700">Additional content goes here.</p>
        <Button label="Action" primary size="small" />
      </div>
    ),
  },
};

export const WithFooter = {
  args: {
    title: 'Card with Footer',
    description: 'This card includes a footer section.',
    footer: (
      <div className="flex justify-end gap-2">
        <Button label="Cancel" primary={false} size="small" />
        <Button label="Save" primary size="small" />
      </div>
    ),
  },
};

export const Elevated = {
  args: {
    variant: 'elevated',
    title: 'Elevated Card',
    description: 'This card has an elevated shadow effect.',
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    title: 'Outlined Card',
    description: 'This card has a prominent border outline.',
  },
};
