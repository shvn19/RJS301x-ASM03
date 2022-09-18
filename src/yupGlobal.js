import * as yup from 'yup';

const REGEX_PASSWORD= /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_.\-@]{8,}$/
const REGEX_ONLY_NUMBER= /^\d+$/
const REGEX_EMAIL= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

yup.addMethod(yup.string, 'password', function (
  message,
) {
  return this.matches(REGEX_PASSWORD, {
    message,
    excludeEmptyString: true,
  })
})

yup.addMethod(yup.string, 'onlyNumber', function (
  message,
) {
  return this.matches(REGEX_ONLY_NUMBER, {
    message,
    excludeEmptyString: true,
  })
})

yup.addMethod(yup.string, 'onlyNumber', function (
  message,
) {
  return this.matches(REGEX_EMAIL, {
    message,
    excludeEmptyString: true,
  })
})

export default yup