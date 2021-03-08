function grader(number) {
    let result = null;
    if (number >= 90) {
        result = "A";
    }
    if (number >= 80) {
        result = "B";
    }
    if (number >= 70) {
        result = "C";
    }
    if (number >= 60) {
        result = "D";
    }
    if (number >= 50) {
        result = "E";
    }
    if (number < 50) {
        result = "F";
    }
    return result;
}