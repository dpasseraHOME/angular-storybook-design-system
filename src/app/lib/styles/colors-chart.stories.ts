import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-color-palette',
  template: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <h1>Chart Colors</h1>
      <p>The chart color palette for the design system.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #84d2e4; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Chart 1</strong>
          <span style="font-size: 12px; color: #666;">#84d2e4</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #ff8080; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Chart 2</strong>
          <span style="font-size: 12px; color: #666;">#ff8080</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #74d6a7; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Chart 3</strong>
          <span style="font-size: 12px; color: #666;">#74d6a7</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #f7d3a7; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Chart 4</strong>
          <span style="font-size: 12px; color: #666;">#f7d3a7</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #a9b0eb; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Chart 5</strong>
          <span style="font-size: 12px; color: #666;">#a9b0eb</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #c0c9d4; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Chart 6</strong>
          <span style="font-size: 12px; color: #666;">#c0c9d4</span>
        </div>
      </div>
    </div>
  `,
  standalone: true,
})
export class ChartColorPaletteComponent {}

const meta: Meta<ChartColorPaletteComponent> = {
  title: 'NM Library/Colors/5. Chart',
  component: ChartColorPaletteComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ChartColorPaletteComponent>;

export const Default: Story = {};
