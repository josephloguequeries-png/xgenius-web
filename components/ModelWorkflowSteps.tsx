import { workflowSteps } from "@/lib/sample-model-data";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ModelWorkflowSteps() {
  return (
    <div className="workflow-steps" aria-label="Model workflow steps">
      {workflowSteps.map((step, index) => (
        <RevealOnScroll key={step.title} delay={index * 80}>
          <article className="workflow-step-card">
            <p className="workflow-step-index">Step {index + 1}</p>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <span>{step.value}</span>
          </article>
        </RevealOnScroll>
      ))}
    </div>
  );
}
