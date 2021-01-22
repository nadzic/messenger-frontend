import { validateText } from '../../utils/validators';

describe('validate email function', () => {
  it('testing it without parameter', () => {
    expect(validateText()).not.toBeUndefined();
    expect(validateText()).toBeFalsy();
  });

  it('testing it not strings, which contain not allowed characters', () => {
    expect(validateText('blabla')).toBe(false);
    expect(validateText('blabla@ssss')).toBe(false);
    expect(validateText('blabla&ssss.com')).toBe(false);
  });

  it('testing it right text', () => {
    expect(validateText('This is something.')).toBe(true);
    expect(validateText('Hack=no hack')).toBe(true);
  });
});