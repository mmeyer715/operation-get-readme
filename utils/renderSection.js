function renderSection(section) {
    let sectionString = '';
    if (section.length === 0) {
        return sectionString;
    } else {
        for (let i = 0; i < section.length; i++) {
            sectionString += (i + 1) + ". " + section[i].value + "\n  ";
        }
        return sectionString;
    }
}

module.exports = renderSection;