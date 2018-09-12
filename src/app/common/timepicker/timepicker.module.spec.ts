import { TimepickerModule } from './timepicker.module';

describe('TimepickerModule', () => {
  let timepickerModule: TimepickerModule;

  beforeEach(() => {
    timepickerModule = new TimepickerModule();
  });

  it('should create an instance', () => {
    expect(timepickerModule).toBeTruthy();
  });
});
