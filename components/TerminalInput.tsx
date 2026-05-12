"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import { portfolioData } from "@/lib/data";

interface HistoryItem {
  command: string;
  output: React.ReactNode;
  id: number;
}

export function TerminalInput() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isBooting, setIsBooting] = useState(true);
  const [currentTypingCmd, setCurrentTypingCmd] = useState("");
  const [gameState, setGameState] = useState<{ active: boolean; targetNumber: number; attempts: number }>({ active: false, targetNumber: 0, attempts: 0 });
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(0);

  // Helper function to generate output nodes to avoid duplication between boot sequence and handleCommand
  const getOutputForCommand = (cmd: string): React.ReactNode => {
    // Check if we are currently playing the game
    if (gameState.active) {
      if (cmd.toLowerCase() === "quit" || cmd.toLowerCase() === "exit") {
        setGameState({ active: false, targetNumber: 0, attempts: 0 });
        return <div className="text-yellow-500">Game aborted. Type <span className="text-blue-400">help</span> for commands.</div>;
      }
      
      const guess = parseInt(cmd);
      if (isNaN(guess)) {
        return <div className="text-red-400">Please enter a valid number, or &apos;quit&apos; to exit the game.</div>;
      }
      
      const newAttempts = gameState.attempts + 1;
      
      if (guess === gameState.targetNumber) {
        setGameState({ active: false, targetNumber: 0, attempts: 0 });
        return <div className="text-green-400 font-bold">🎉 Correct! You guessed it in {newAttempts} attempts! Type <span className="text-blue-400">help</span> to continue.</div>;
      } else if (guess < gameState.targetNumber) {
        setGameState(prev => ({ ...prev, attempts: newAttempts }));
        return <div>Too low! Try again...</div>;
      } else {
        setGameState(prev => ({ ...prev, attempts: newAttempts }));
        return <div>Too high! Try again...</div>;
      }
    }

    switch (cmd) {
      case "help":
      case "Get-Command":
        return (
          <div className="mt-1 space-y-1">
            <p className="text-gray-500">Available commands:</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span className="text-blue-600 dark:text-blue-400">about</span>
              <span className="text-blue-600 dark:text-blue-400">experience</span>
              <span className="text-blue-600 dark:text-blue-400">projects</span>
              <span className="text-blue-600 dark:text-blue-400">skills</span>
              <span className="text-blue-600 dark:text-blue-400">contact</span>
              <span className="text-green-500 font-bold">guess (Play a game!)</span>
              <span className="text-gray-500">Clear-Host</span>
              <span className="text-gray-500">clear</span>
              <span className="text-gray-500">whoami</span>
              <span className="text-gray-500">Get-Location</span>
              <span className="text-gray-500">pwd</span>
            </div>
          </div>
        );
      case "guess":
      case "play":
      case "game":
        const newTarget = Math.floor(Math.random() * 100) + 1;
        setGameState({ active: true, targetNumber: newTarget, attempts: 0 });
        return (
          <div className="mt-2 p-4 border border-green-500/30 bg-green-500/10 rounded">
            <div className="font-bold text-green-400 text-lg mb-2">🎮 NUMBER GUESSING GAME 🎮</div>
            <p>I have thought of a number between <span className="font-bold text-white">1 and 100</span>.</p>
            <p className="text-gray-400 mt-1">Type your guess below, or type &apos;quit&apos; to exit.</p>
          </div>
        );
      case "about":
      case "Get-Content about.txt":
      case "cat about.txt":
      case "type about.txt":
        return <div className="whitespace-pre-wrap mt-2">{portfolioData.about}</div>;
      case "experience":
      case "Get-ChildItem ./experience":
      case "dir ./experience":
      case "ls ./experience":
        return (
          <div className="space-y-4 mt-2">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx}>
                <div className="font-bold text-gray-900 dark:text-gray-200">{exp.role} @ {exp.company}</div>
                <div className="text-gray-500 text-sm mb-1">{exp.period}</div>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  {exp.bulletPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
      case "projects":
      case "Get-ChildItem ./projects":
      case "dir ./projects":
      case "ls ./projects":
        return (
          <div className="space-y-4 mt-2">
            {portfolioData.projects.map((project) => (
              <div key={project.id} className="p-3 bg-gray-100 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 rounded">
                <div className="font-bold text-gray-900 dark:text-gray-100">{project.title}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm mb-2">{project.technicalSummary}</div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-gray-500">[{tech.name}]</span>
                  ))}
                </div>
                <div className="flex gap-4 text-xs font-semibold mt-2">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      [repository]
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      [live demo]
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
      case "skills":
      case "Get-Content skills.json":
      case "cat skills.json":
      case "type skills.json":
        return (
          <div className="flex flex-wrap gap-2 mt-2">
            {portfolioData.skills.map((skill, i) => (
              <span key={i} className="text-gray-700 dark:text-gray-300">[{skill.name}]</span>
            ))}
          </div>
        );
      case "contact":
      case "contact --info":
        return (
          <ul className="mt-2 space-y-1">
            <li><span className="text-gray-500 w-24 inline-block">Email:</span> <a href={`mailto:${portfolioData.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">{portfolioData.email}</a></li>
            {portfolioData.socials.github && (
              <li><span className="text-gray-500 w-24 inline-block">GitHub:</span> <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{portfolioData.socials.github}</a></li>
            )}
            {portfolioData.socials.linkedin && (
              <li><span className="text-gray-500 w-24 inline-block">LinkedIn:</span> <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{portfolioData.socials.linkedin}</a></li>
            )}
            {portfolioData.resumeUrl && (
              <li><span className="text-gray-500 w-24 inline-block">Resume:</span> <a href={portfolioData.resumeUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">[download pdf]</a></li>
            )}
          </ul>
        );
      case "whoami":
        return portfolioData.name;
      case "pwd":
      case "Get-Location":
        return "Path\n----\nC:\\Users\\vikas\\portfolio";
      case "sudo":
        return "sudo : The term 'sudo' is not recognized as the name of a cmdlet, function, script file, or operable program.";
      default:
        return (
          <span>
            <span className="text-red-500 dark:text-red-400">{cmd} : The term &apos;{cmd}&apos; is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.</span><br />
            Type <span className="text-blue-600 dark:text-blue-400">help</span> for available commands.
          </span>
        );
    }
  };

  // Boot sequence effect
  useEffect(() => {
    let mounted = true;
    
    const bootSequence = async () => {
      const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
      
      const commands = [
        "Get-Content about.txt",
        "Get-ChildItem ./experience",
        "contact --info",
        "Get-ChildItem ./projects",
        "Get-Content skills.json",
        "help"
      ];

      for (const cmd of commands) {
        if (!mounted) return;
        
        // Type out the command very fast
        setCurrentTypingCmd("");
        for (let i = 0; i <= cmd.length; i++) {
          if (!mounted) return;
          setCurrentTypingCmd(cmd.substring(0, i));
          await wait(20); // 20ms per character
        }
        
        await wait(100); // Slight pause before executing
        
        if (!mounted) return;
        
        // Execute the command: clear typing state and push to history
        setCurrentTypingCmd("");
        const output = getOutputForCommand(cmd);
        setHistory(prev => [...prev, { command: cmd, output, id: nextId.current++ }]);
        
        // Scroll to bottom
        window.scrollTo(0, document.body.scrollHeight);
        
        // Wait a bit before starting the next command
        await wait(300);
      }
      
      if (mounted) {
        setIsBooting(false);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
    };

    bootSequence();

    return () => { mounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Focus input on any printable key (but not browser shortcuts)
      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey && !isBooting) {
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isBooting]);

  const handleCommand = (e: FormEvent) => {
    e.preventDefault();
    if (isBooting) return;
    
    const cmd = input.trim();

    if (!cmd) return;

    if (!gameState.active && (cmd.toLowerCase() === "clear" || cmd.toLowerCase() === "clear-host")) {
      setHistory([]);
      setInput("");
      return;
    }

    const output = getOutputForCommand(cmd);

    setHistory((prev) => [...prev, { command: cmd, output, id: nextId.current++ }]);
    setInput("");
    
    // Scroll to bottom after outputting
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 50);
  };

  return (
    <div className="font-mono w-full">
      {history.map((h) => (
        <div key={h.id} className="mb-4">
          <div className="flex">
            <span className="text-gray-500 mr-2 whitespace-nowrap">PS C:\Users\vikas&gt;</span>
            <span className="text-gray-900 dark:text-gray-100 break-all">{h.command}</span>
          </div>
          {h.output && (
            <div className="text-gray-700 dark:text-gray-300 ml-2 mt-1">
              {h.output}
            </div>
          )}
        </div>
      ))}
      
      {isBooting ? (
        <div className="flex items-center">
          <span className="text-gray-500 mr-2 whitespace-nowrap">PS C:\Users\vikas&gt;</span>
          <span className="text-gray-900 dark:text-gray-100">{currentTypingCmd}</span>
          <span className="w-2 h-5 bg-gray-900 dark:bg-gray-100 inline-block ml-1 animate-pulse"></span>
        </div>
      ) : (
        <form
          onSubmit={handleCommand}
          className="flex items-center cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          <span className="text-gray-500 mr-2 whitespace-nowrap">
            {gameState.active ? "guess>" : "PS C:\\Users\\vikas>"}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              boxShadow: "none",
              padding: 0,
              margin: 0,
              width: "100%",
              color: "inherit",
              font: "inherit",
              WebkitAppearance: "none",
            }}
            autoComplete="off"
            spellCheck={false}
            autoFocus
          />
        </form>
      )}
      
      {/* Blinking cursor effect for PowerShell vibe */}
      <style dangerouslySetInnerHTML={{__html: `
        input:focus {
          caret-color: transparent;
        }
        input:focus + .cursor {
          display: inline-block;
        }
      `}} />
    </div>
  );
}
