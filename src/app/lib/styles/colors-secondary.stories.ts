import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-secondary-color-palette',
  template: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <h1>Secondary Colors</h1>
      <p>The secondary color palette for the design system.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-bottom: 32px;">
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #1e6db0; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Blue 0</strong>
          <span style="font-size: 12px; color: #666;">#1e6db0</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #267ac5; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Blue 1</strong>
          <span style="font-size: 12px; color: #666;">#267ac5</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #3a9bfc; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Blue 2</strong>
          <span style="font-size: 12px; color: #666;">#3a9bfc</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #3a9bfc; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Blue 2 (65%)</strong>
          <span style="font-size: 12px; color: #666;">#3a9bfc</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #c4e1fe; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Blue 3</strong>
          <span style="font-size: 12px; color: #666;">#c4e1fe</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #ebf5ff; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Blue 4</strong>
          <span style="font-size: 12px; color: #666;">#ebf5ff</span>
        </div>
      </div>
    </div>
  `,
  standalone: true
})
export class SecondaryColorPaletteComponent {}

const meta: Meta<SecondaryColorPaletteComponent> = {
  title: 'NM Library/Colors/Secondary',
  component: SecondaryColorPaletteComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SecondaryColorPaletteComponent>;

export const Default: Story = {};
