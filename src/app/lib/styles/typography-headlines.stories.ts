import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-typography-headlines',
  template: `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px;">
      <h1 style="margin: 0 0 32px 0; font-size: 32px; font-weight: 700; color: #27323f;">Headlines</h1>
      <p style="margin: 0 0 40px 0; font-size: 16px; color: #586471;">Typography styles for headlines and page titles.</p>
      
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 24px; font-weight: 700; line-height: 32px; color: #27323f;">H1 - The quick brown fox jumps</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">24px / Bold / 32px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 20px; font-weight: 700; line-height: 28px; color: #27323f;">H2 - The quick brown fox jumps over the lazy dog</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">20px / Bold / 28px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 20px; font-weight: 600; line-height: 28px; color: #27323f;">H3 - The quick brown fox jumps over the lazy dog</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">20px / Semi Bold / 28px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 16px; font-weight: 600; line-height: 24px; color: #27323f;">H4 - The quick brown fox jumps over the lazy dog and runs away</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">16px / Semi Bold / 24px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 14px; font-weight: 600; line-height: 20px; color: #27323f;">H5 - The quick brown fox jumps over the lazy dog and runs away quickly</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">14px / Semi Bold / 20px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 14px; font-weight: 500; line-height: 20px; color: #27323f;">H6 - The quick brown fox jumps over the lazy dog and runs away quickly</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">14px / Medium / 20px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 12px; font-weight: 400; line-height: 16px; color: #27323f;">H7 - The quick brown fox jumps over the lazy dog and runs away quickly through the forest</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">12px / Regular / 16px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 10px; font-weight: 600; line-height: 14px; color: #27323f; text-transform: uppercase; letter-spacing: 0.5px;">H8 - THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">10px / Semi Bold / 14px line-height</div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
})
export class TypographyHeadlinesComponent {}

const meta: Meta<TypographyHeadlinesComponent> = {
  title: 'NM Library/Typography/1. Headlines',
  component: TypographyHeadlinesComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TypographyHeadlinesComponent>;

export const Default: Story = {};
