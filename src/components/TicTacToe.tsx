import { useState, useCallback } from 'react';
import { RefreshCw, Trophy } from 'lucide-react';

type Cell = 'X' | 'O' | null;
type Status = 'playing' | 'won' | 'lost' | 'draw';

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(b: Cell[]): { winner: Cell; line: number[] } | null {
  for (const line of LINES) {
    const [a, c, d] = line;
    if (b[a] && b[a] === b[c] && b[a] === b[d]) {
      return { winner: b[a], line };
    }
  }
  return null;
}

function minimax(
  board: Cell[],
  isAI: boolean,
  depth: number,
): { score: number; index: number } {
  const result = checkWinner(board);
  if (result?.winner === 'O') return { score: 10 - depth, index: -1 };
  if (result?.winner === 'X') return { score: depth - 10, index: -1 };
  if (board.every(Boolean)) return { score: 0, index: -1 };

  const moves: { score: number; index: number }[] = [];
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = isAI ? 'O' : 'X';
      const { score } = minimax(board, !isAI, depth + 1);
      moves.push({ score, index: i });
      board[i] = null;
    }
  }

  if (isAI) {
    moves.sort((a, b) => b.score - a.score);
    const best = moves.filter((m) => m.score === moves[0].score);
    if (Math.random() < 0.28 && moves.length > 1) {
      const pool = moves.slice(0, Math.min(3, moves.length));
      return pool[Math.floor(Math.random() * pool.length)];
    }
    return best[Math.floor(Math.random() * best.length)];
  } else {
    moves.sort((a, b) => a.score - b.score);
    return moves[0];
  }
}

export default function TicTacToe({ onWin }: { onWin: () => void }) {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [status, setStatus] = useState<Status>('playing');
  const [winLine, setWinLine] = useState<number[]>([]);
  const [locked, setLocked] = useState(false);

  const reset = useCallback(() => {
    setBoard(Array(9).fill(null));
    setStatus('playing');
    setWinLine([]);
    setLocked(false);
  }, []);

  const playMove = useCallback((index: number, b: Cell[]) => {
    const next = [...b];
    next[index] = 'O';
    setBoard(next);

    const w = checkWinner(next);
    if (w?.winner === 'O') {
      setStatus('lost');
      setWinLine(w.line);
      setLocked(true);
      return;
    }
    if (next.every(Boolean)) {
      setStatus('draw');
      setLocked(true);
      return;
    }
  }, []);

  const handleClick = (index: number) => {
    if (board[index] || locked) return;
    const next = [...board];
    next[index] = 'X';
    setBoard(next);

    const w = checkWinner(next);
    if (w?.winner === 'X') {
      setStatus('won');
      setWinLine(w.line);
      setLocked(true);
      onWin();
      return;
    }
    if (next.every(Boolean)) {
      setStatus('draw');
      setLocked(true);
      return;
    }

    setTimeout(() => {
      const { index: aiMove } = minimax([...next], true, 0);
      if (aiMove >= 0) playMove(aiMove, next);
    }, 450);
  };

  const statusText: Record<Status, string> = {
    playing: 'Your move — you are X',
    won: 'You won! Unlocking portfolio…',
    lost: 'AI wins this round',
    draw: "It's a draw",
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-between w-full px-1">
        <span
          className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${
            status === 'won'
              ? 'text-white'
              : status === 'lost'
                ? 'text-white/40'
                : status === 'draw'
                  ? 'text-white/40'
                  : 'text-white/50'
          }`}
        >
          {statusText[status]}
        </span>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 text-[12px] text-white/30 hover:text-white/70 transition-colors duration-300"
        >
          <RefreshCw className="h-3.5 w-3.5" /> Reset
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 w-full max-w-[280px]">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            disabled={!!cell || locked}
            className={`relative aspect-square flex items-center justify-center rounded-[14px] border transition-all duration-300
              ${
                winLine.includes(i)
                  ? 'border-white/60 bg-white/10'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/5'
              }
              ${!cell && !locked ? 'cursor-pointer' : 'cursor-default'}
            `}
          >
            {cell === 'X' && (
              <span className="text-white text-4xl leading-none font-bold">✕</span>
            )}
            {cell === 'O' && (
              <span className="text-white/40 text-4xl leading-none font-bold">◯</span>
            )}
          </button>
        ))}
      </div>

      {status === 'won' && (
        <div className="flex items-center gap-2 text-white animate-pulse">
          <Trophy className="h-4 w-4" />
          <span className="text-[13px] font-medium">Portfolio unlocked</span>
        </div>
      )}
    </div>
  );
}
