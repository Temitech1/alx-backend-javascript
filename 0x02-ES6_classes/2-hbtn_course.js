/* eslint-disable */

export default class HolbertonCourse {
	contstructor(name, length, students) {
		this.name = name;
		this.length = length;
		this.students = students;
	}

	/* gets the name of students */
	get name() {
		return this._name;
	}

	/* sets the name of students */
	set name(value) {
		if (typeof value !== 'string') {
			throw new TypeError('Name must be a string');
		}
		this._name = value;
	}


	/* gets the length of course */
	get length() {
		return this._length;
	}

	/* sets the length of course */
	set length(value) {
		if (typeof value !== 'number') {
			throw new TypeError('lenth must be a number');
		}
	}

	/* gets the name of students */
	get students() {
		return this._students;
	}

	/* sets the name of students */
	set students(value) {
		if (!(value instanceof Array)) {
			throw new TypeError('Students must be an array of strings');
		}
		if (!value.every((student) => typeof student === 'string')) {
			throw new TypeError('Students must be an array of strings');
		}
		this._students = value;
	}
}
