import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-typography-labels',
  template: `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px;">
      <h1 style="margin: 0 0 32px 0; font-size: 32px; font-weight: 700; color: #27323f;">Labels</h1>
      <p style="margin: 0 0 40px 0; font-size: 16px; color: #586471;">Typography styles for labels, form elements, and UI text.</p>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 15px; font-weight: 600; line-height: 16px; color: #27323f;">Label 1 - Form Label Text</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">15px / Semi Bold / 16px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 14px; font-weight: 500; line-height: 16px; color: #27323f;">Label 2 - Button Label Text</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">14px / Medium / 16px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 14px; font-weight: 500; line-height: 18px; color: #27323f;">Label 3 - Input Field Label</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">14px / Medium / 18px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 13px; font-weight: 500; line-height: 18px; color: #27323f;">Label 4 - Secondary Label Text</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">13px / Medium / 18px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 13px; font-weight: 600; line-height: 20px; color: #27323f;">Label 5 - Strong Label Text</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">13px / Semi Bold / 20px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 13px; font-weight: 700; line-height: 20px; color: #27323f;">Label 5E - Emphasized Label Text</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">13px / Bold / 20px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 13px; font-weight: 400; line-height: 20px; color: #27323f;">Label 6 - Regular Label Text</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">13px / Regular / 20px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 13px; font-weight: 400; line-height: 18px; color: #27323f;">Label 7 - Compact Label Text</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">13px / Regular / 18px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 12px; font-weight: 600; line-height: 16px; color: #27323f;">Label 8 - Small Label Text</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">12px / Semi Bold / 16px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 16px; font-weight: 700; line-height: 24px; color: #27323f;">Label Nav 1 - Primary Navigation</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">16px / Bold / 24px line-height</div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #ffffff;">
          <div style="font-size: 16px; font-weight: 600; line-height: 24px; color: #27323f;">Label Nav 2 - Secondary Navigation</div>
          <div style="font-size: 12px; color: #686e95; font-family: 'SF Mono', Monaco, monospace; background: #f4f7fa; padding: 4px 8px; border-radius: 4px; display: inline-block; align-self: flex-start;">16px / Semi Bold / 24px line-height</div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
})
export class TypographyLabelsComponent {}

const meta: Meta<TypographyLabelsComponent> = {
  title: 'NM Library/Typography/2. Labels',
  component: TypographyLabelsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TypographyLabelsComponent>;

export const Default: Story = {};
