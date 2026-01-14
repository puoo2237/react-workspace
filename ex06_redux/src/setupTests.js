// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Mock DataTransfer for drag and drop operations in tests
global.DataTransfer = class DataTransfer {
  constructor() {
    this.dropEffect = 'none';
    this.effectAllowed = 'all';
    this.files = [];
    this.items = [];
    this.types = [];
  }
  clearData() {
    this.items = [];
    this.types = [];
  }
  getData(format) {
    const item = this.items.find(item => item.type === format);
    return item ? item.data : '';
  }
  setData(format, data) {
    this.items.push({ type: format, data });
    this.types.push(format);
  }
  setDragImage() {}
};
