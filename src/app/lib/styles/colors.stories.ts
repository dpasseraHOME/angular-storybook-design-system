import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  template: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <h1>Primary Colors</h1>
      <p>The primary color palette for the design system.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-bottom: 32px;">
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #ffffff; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>White</strong>
          <span style="font-size: 12px; color: #666;">#ffffff</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #27323f; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 0</strong>
          <span style="font-size: 12px; color: #666;">#27323f</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #3e4a58; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 1</strong>
          <span style="font-size: 12px; color: #666;">#3e4a58</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #576370; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 2</strong>
          <span style="font-size: 12px; color: #666;">#576370</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #586471; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 3</strong>
          <span style="font-size: 12px; color: #666;">#586471</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #5c6876; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 4</strong>
          <span style="font-size: 12px; color: #666;">#5c6876</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #5d6f83; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 5</strong>
          <span style="font-size: 12px; color: #666;">#5d6f83</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #687e95; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 6</strong>
          <span style="font-size: 12px; color: #666;">#687e95</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #7a8fa5; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 7</strong>
          <span style="font-size: 12px; color: #666;">#7a8fa5</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #b7c1cd; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 8</strong>
          <span style="font-size: 12px; color: #666;">#b7c1cd</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #fafcfe; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 9</strong>
          <span style="font-size: 12px; color: #666;">#fafcfe</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #f9fafc; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 9a</strong>
          <span style="font-size: 12px; color: #666;">#f9fafc</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #fafcfe; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Grey 9b</strong>
          <span style="font-size: 12px; color: #666;">#fafcfe</span>
        </div>
      </div>


    </div>
  `,
  standalone: true
})
export class ColorPaletteComponent {}

const meta: Meta<ColorPaletteComponent> = {
  title: 'NM Library/Colors/1. Primary',
  component: ColorPaletteComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ColorPaletteComponent>;

export const Default: Story = {};
