import MyInput from './Input.vue'

import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/Header',
  component: MyInput,
  render: (args: any) => ({
    components: { MyInput },
    setup() {
      return { args };
    },
    template: '<my-input :user="args.user" />',
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof MyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}
