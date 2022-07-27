#!/usr/bin/env node
/* eslint no-console: ["error", { allow: ["error"] }] */
const fs = require('fs-extra');

const BUILD_ROOT = `${process.cwd()}/build/`;
const options = {
  mode: 0o2775,
};

async function createDir(directory) {
  try {
    const catalogDir = `${BUILD_ROOT}${directory}`;
    await fs.ensureDir(catalogDir, options);
  } catch (err) {
    console.error(err);
  }
}

async function moveDir(directory) {
  try {
    const dst = `${BUILD_ROOT}${directory}/`;
    await fs.move(`${BUILD_ROOT}static`, `${dst}static`, { overwrite: true });
    /** similary if we have images fodler then please add next line  */
    // await fs.move(`${BUILD_ROOT}images`, `${dst}images`, { overwrite: true });
  } catch (err) {
    console.error(err);
  }
}

async function rename(srcFile, dstFile) {
  try {
    await fs.move(`${BUILD_ROOT}${srcFile}`, `${BUILD_ROOT}${dstFile}`);
  } catch (err) {
    console.error(err);
  }
}

const dirName = 'catalog';
createDir(dirName);
moveDir(dirName);
rename('index.html', 'catalog.html');