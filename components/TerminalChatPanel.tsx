type TerminalChatPanelProps = {
  question: string;
  answer: string;
};

export default function TerminalChatPanel({ question, answer }: TerminalChatPanelProps) {
  return (
    <div className="terminal-chat-panel" aria-label="xGenie copilot explanation">
      <article className="terminal-chat-message user">
        <p className="terminal-chat-role">User</p>
        <p>{question}</p>
      </article>
      <article className="terminal-chat-message assistant">
        <p className="terminal-chat-role">xGenie</p>
        <p>{answer}</p>
      </article>
    </div>
  );
}
