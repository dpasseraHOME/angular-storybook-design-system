import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accent-color-palette',
  template: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <h1>Accent Colors</h1>
      <p>The accent color palette for the design system.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-bottom: 32px;">
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #f29049; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Orange 0</strong>
          <span style="font-size: 12px; color: #666;">#f29049</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #cc4343; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Red 1</strong>
          <span style="font-size: 12px; color: #666;">#cc4343</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #da3838; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Red 2</strong>
          <span style="font-size: 12px; color: #666;">#da3838</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #eb3c3c; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Red 3</strong>
          <span style="font-size: 12px; color: #666;">#eb3c3c</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #f2c349; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Yellow 0</strong>
          <span style="font-size: 12px; color: #666;">#f2c349</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #f9f1df; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Yellow 1</strong>
          <span style="font-size: 12px; color: #666;">#f9f1df</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #3d996d; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Green 0</strong>
          <span style="font-size: 12px; color: #666;">#3d996d</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #47b27f; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Green 1</strong>
          <span style="font-size: 12px; color: #666;">#47b27f</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #51cc91; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Green 2</strong>
          <span style="font-size: 12px; color: #666;">#51cc91</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #5be5a3; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Green 3</strong>
          <span style="font-size: 12px; color: #666;">#5be5a3</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #96faca; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Green 4</strong>
          <span style="font-size: 12px; color: #666;">#96faca</span>
        </div>
      </div>
    </div>
  `,
  standalone: true
})
export class AccentColorPaletteComponent {}

const meta: Meta<AccentColorPaletteComponent> = {
  title: 'NM Library/Colors/3. Accent',
  component: AccentColorPaletteComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AccentColorPaletteComponent>;

export const Default: Story = {};
