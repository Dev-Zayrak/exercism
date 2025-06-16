// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = Date.now()) {
  return new Date(now + days * 24 * 60 * 60 * 1000);
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export const getAppointmentTimestamp = appointmentDate => appointmentDate.toISOString();

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const date = new Date(timestamp);
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  let appointment = new Date(timestamp);

  if (options.year !== undefined) appointment.setFullYear(options.year);
  if (options.month !== undefined) appointment.setMonth(options.month);
  if (options.date !== undefined) appointment.setDate(options.date);
  if (options.hour !== undefined) appointment.setHours(options.hour);
  if (options.minute !== undefined) appointment.setMinutes(options.minute);
  
  return getAppointmentDetails(appointment.toISOString());
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const date1InMilliseconds = new Date(timestampA).getTime();
  const date2InMilliseconds = new Date(timestampB).getTime();

  return Math.round((date2InMilliseconds - date1InMilliseconds) / 1000);
}

/**
 * Check if an appointment is now valid or not
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return new Date(appointmentTimestamp) > new Date(currentTimestamp);
}
