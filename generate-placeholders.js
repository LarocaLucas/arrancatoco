import fs from 'fs';
import { createCanvas } from 'canvas';
import path from 'path';

const width = 800;
const height = 800;

for (let i = 1; i <= 6; i++) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Fundo escuro
  ctx.fillStyle = '#080E2E'; // var(--color-bg-deepest)
  ctx.fillRect(0, 0, width, height);
  
  // Borda dourada grossa interna
  ctx.strokeStyle = '#FCA311'; // var(--color-gold)
  ctx.lineWidth = 15;
  ctx.strokeRect(20, 20, width - 40, height - 40);
  
  // Círculo no centro para destacar
  ctx.beginPath();
  ctx.arc(width / 2, height / 2 - 20, 200, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(252, 163, 17, 0.1)'; // dourado transparente
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.stroke();

  // Interrogação gigante no centro
  ctx.fillStyle = '#FCA311';
  ctx.font = 'bold 200px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('?', width / 2, height / 2 - 40);
  
  // Texto EM BREVE
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 60px sans-serif';
  ctx.fillText('EM BREVE', width / 2, height / 2 + 150);

  // Atrações
  ctx.fillStyle = '#AAAAAA';
  ctx.font = '30px sans-serif';
  ctx.fillText(`ATRAÇÃO ${i}`, width / 2, height / 2 + 220);

  const buffer = canvas.toBuffer('image/png');
  const filepath = path.join('public', 'images', 'artists', `artist-${i}-hidden.png`);
  fs.writeFileSync(filepath, buffer);
  console.log(`Gerado: ${filepath}`);
}
