import { ColorPanelModule } from './color-panel.module';

describe('ColorPanelModule', () => {
  let colorPanelModule: ColorPanelModule;

  beforeEach(() => {
    colorPanelModule = new ColorPanelModule();
  });

  it('should create an instance', () => {
    expect(colorPanelModule).toBeTruthy();
  });
});
