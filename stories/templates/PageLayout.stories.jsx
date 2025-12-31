import { PageLayout } from '../../src/templates/PageLayout';
import { Header } from '../../src/organisms/Header';
import { Card } from '../../src/molecules/Card';
import { Heading } from '../../src/atoms/Heading';

export default {
  title: 'Templates/PageLayout',
  component: PageLayout,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6AOPb1d5gup4V5XImuyYWJ/Design-System---Personal?node-id=4212-396&t=8A0CJzgnQdx7UlLp-1',
    },
  },
  tags: ['autodocs'],
};

export const Default = {
  render: () => (
    <PageLayout
      header={
        <Header
          navigation={[
            { label: 'Home', href: '#' },
            { label: 'About', href: '#' },
            { label: 'Contact', href: '#' },
          ]}
          actions={[
            { label: 'Sign In', primary: false, size: 'small' },
            { label: 'Sign Up', primary: true, size: 'small' },
          ]}
        />
      }
      sidebar={
        <nav className="space-y-2">
          <a href="#" className="block px-3 py-2 rounded bg-gray-200 text-gray-900">
            Dashboard
          </a>
          <a href="#" className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100">
            Settings
          </a>
          <a href="#" className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100">
            Profile
          </a>
        </nav>
      }
      footer={
        <div className="text-center text-gray-600">
          © 2024 My Company. All rights reserved.
        </div>
      }
    >
      <div className="space-y-6">
        <Heading level={1}>Page Title</Heading>
        <Card
          title="Welcome"
          description="This is a complete page layout template with header, sidebar, main content, and footer."
        />
        <Card
          title="Content Section"
          description="You can add multiple content sections here."
        />
      </div>
    </PageLayout>
  ),
};

export const WithoutSidebar = {
  render: () => (
    <PageLayout
      header={
        <Header
          navigation={[
            { label: 'Home', href: '#' },
            { label: 'About', href: '#' },
          ]}
        />
      }
      footer={
        <div className="text-center text-gray-600">
          © 2024 My Company. All rights reserved.
        </div>
      }
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <Heading level={1}>Page Without Sidebar</Heading>
        <Card
          title="Full Width Content"
          description="This layout doesn't include a sidebar, giving more space for content."
        />
      </div>
    </PageLayout>
  ),
};
