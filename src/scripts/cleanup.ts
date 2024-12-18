#!/usr/bin/env node
import { cleanupProject } from '../utils/cleanup';

async function main() {
  try {
    const result = await cleanupProject();
    if (result.success) {
      console.log('✅', result.message);
    } else {
      console.error('❌', result.message);
      console.error(result.error);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error inesperado:', error);
    process.exit(1);
  }
}

main();