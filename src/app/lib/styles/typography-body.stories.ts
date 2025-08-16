import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-typography-body',
  template: `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px;">
      <h1 style="margin: 0 0 32px 0; font-size: 32px; font-weight: 700; color: #27323f;">Body Text</h1>
      <p style="margin: 0 0 40px 0; font-size: 16px; color: #586471;">Typography styles for body content, paragraphs, and long-form text.</p>
      
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #27323f;">Base Text</h3>
          <div style="font-size: 13px; font-weight: 400; line-height: 19px; color: #27323f; margin-bottom: 12px;">
            This is the base body text style used throughout the application. It provides excellent readability for longer content blocks and maintains consistency across all text elements. The quick brown fox jumps over the lazy dog and runs through the forest with incredible speed and agility.
          </div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">13px / Regular / 19px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #27323f;">Base Emphasized Text</h3>
          <div style="font-size: 13px; font-weight: 500; line-height: 19px; color: #27323f; margin-bottom: 12px;">
            This is the emphasized body text style used to highlight important content within paragraphs. It maintains the same size as base text but with medium weight for better visual hierarchy. The quick brown fox jumps over the lazy dog and runs through the forest with incredible speed and agility.
          </div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">13px / Medium / 19px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #27323f;">Base Strong Text</h3>
          <div style="font-size: 13px; font-weight: 600; line-height: 19px; color: #27323f; margin-bottom: 12px;">
            This is the strong body text style used for important statements and key information that needs to stand out prominently within content blocks. The quick brown fox jumps over the lazy dog and runs through the forest with incredible speed and agility.
          </div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">13px / Semi Bold / 19px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600; color: #27323f;">Blurb Text</h3>
          <div style="font-size: 14px; font-weight: 400; line-height: 20px; color: #27323f; margin-bottom: 12px;">
            This is the blurb text style used for introductory paragraphs, descriptions, and summary content that needs to be slightly more prominent than regular body text. The quick brown fox jumps over the lazy dog and runs through the forest with incredible speed and agility, demonstrating the perfect balance of readability and visual hierarchy.
          </div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">14px / Regular / 20px line-height</div>
        </div>
        
        <div style="padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #27323f;">Mixed Content Example</h3>
          <div style="font-size: 14px; font-weight: 400; line-height: 20px; color: #27323f; margin-bottom: 16px;">
            This example demonstrates how different body text styles work together in a typical content block. This is blurb text introducing the content.
          </div>
          <div style="font-size: 13px; font-weight: 400; line-height: 19px; color: #27323f; margin-bottom: 16px;">
            This is regular base text that forms the main content. It provides excellent readability and is perfect for longer paragraphs. <span style="font-weight: 500;">This is emphasized text</span> within the same paragraph to highlight important points. <span style="font-weight: 600;">This is strong text</span> for the most critical information.
          </div>
          <div style="font-size: 13px; font-weight: 400; line-height: 19px; color: #27323f;">
            The typography system ensures consistent spacing, readability, and visual hierarchy throughout the application while maintaining flexibility for different content types and contexts.
          </div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
})
export class TypographyBodyComponent {}

const meta: Meta<TypographyBodyComponent> = {
  title: 'NM Library/Typography/Body',
  component: TypographyBodyComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TypographyBodyComponent>;

export const Default: Story = {};
