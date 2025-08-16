import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spot-color-palette',
  template: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <h1>Spot Colors</h1>
      <p>The spot color palette for the design system.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #2f353c; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Spot Grey 0B</strong>
          <span style="font-size: 12px; color: #666;">#2f353c</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #383b45; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Spot Grey 0C</strong>
          <span style="font-size: 12px; color: #666;">#383b45</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #373e46; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Spot Grey 0D</strong>
          <span style="font-size: 12px; color: #666;">#373e46</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #3e4752; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Spot Grey 1B</strong>
          <span style="font-size: 12px; color: #666;">#3e4752</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #3d4854; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Spot Grey 1C</strong>
          <span style="font-size: 12px; color: #666;">#3d4854</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #9297a9; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Spot Grey 7B</strong>
          <span style="font-size: 12px; color: #666;">#9297a9</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #a1b8ce; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Spot Blue Grey 0</strong>
          <span style="font-size: 12px; color: #666;">#a1b8ce</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #adc0d3; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Spot Blue Grey 1</strong>
          <span style="font-size: 12px; color: #666;">#adc0d3</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #c4d4e2; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Spot Blue Grey 2</strong>
          <span style="font-size: 12px; color: #666;">#c4d4e2</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #bdd4ee; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Spot Blue Grey 3</strong>
          <span style="font-size: 12px; color: #666;">#bdd4ee</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <div style="width: 80px; height: 80px; background-color: #30333d; border-radius: 4px; margin-bottom: 8px; border: 1px solid #ccc;"></div>
          <strong>Spot Dark Grey</strong>
          <span style="font-size: 12px; color: #666;">#30333d</span>
        </div>
      </div>
    </div>
  `,
  standalone: true,
})
export class SpotColorPaletteComponent {}

const meta: Meta<SpotColorPaletteComponent> = {
  title: 'NM Library/Colors/4. Spot',
  component: SpotColorPaletteComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<SpotColorPaletteComponent>;

export const Default: Story = {};
