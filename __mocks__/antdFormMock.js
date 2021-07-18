/* eslint-env jest */

// Additional Information: https://stackoverflow.com/questions/53670441/how-do-i-stub-ant-designs-form-getfielddecorator

const mockForm = {
  getFieldDecorator: jest.fn(() => c => c),
  getFieldValue: () => {
    return null;
  },
  isFieldTouched: () => {
    return true;
  }
};

export default mockForm;
