import ClassRoom from './0-classroom';
  /**
   * @param {Number} maxStudentsSize - The maximum number of
   * students in the class.
   */
export default function initializeRooms() {
	return [19, 20, 34].map((size) => new ClassRoom(size));
}
