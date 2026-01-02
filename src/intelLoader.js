const fs = require('fs');

// Load your Go-sourced JSON files
const wormholeTypes = JSON.parse(fs.readFileSync('./data/types.json'));
const systemData = JSON.parse(fs.readFileSync('./data/systems.json'));
const staticsMap = JSON.parse(fs.readFileSync('./data/statics.json'));
const effectsMap = JSON.parse(fs.readFileSync('./data/effects.json'));

/**
 * The "Matching Engine" Helper
 * Finds if a system matches a customer's specific needs
 */
function getFullSystemProfile(jcode) {
    const statics = staticsMap[jcode]; // e.g., ["Q003", "Z006"]
    if (!statics) return null;

    // Map those static codes to actual info (Class, Mass, etc.)
    const staticInfo = statics.map(code => ({
        code: code,
        leadsTo: wormholeTypes[code]?.leadsTo,
        totalMass: wormholeTypes[code]?.mass
    }));

    return {
        jcode: jcode,
        statics: staticInfo
    };
}

module.exports = { getFullSystemProfile };