import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

export function UiShowcase() {
  return (
    <section className="card showcase" id="system">
      <div className="section-head">
        <div>
          <p className="eyebrow">System baseline</p>
          <h3>Reusable primitives with one visual language</h3>
        </div>
      </div>

      <div className="showcase__grid">
        <Card
          title="Buttons"
          description="Semantic variants for primary, secondary and ghost actions."
        >
          <div className="showcase__actions">
            <Button>Ship release</Button>
            <Button variant="secondary">Preview branch</Button>
            <Button variant="ghost">Open docs</Button>
          </div>
        </Card>

        <Card
          title="Inputs"
          description="Consistent fields for forms, filters, and onboarding steps."
        >
          <div className="showcase__stack">
            <Input label="Workspace name" placeholder="Northstar Labs" />
            <Input label="Owner email" placeholder="team@northstar.dev" />
          </div>
        </Card>
      </div>
    </section>
  );
}
