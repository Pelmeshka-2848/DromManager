export type TemplateVariables = Record<string, string | number | undefined>;

export function renderTemplate(template: string, variables: TemplateVariables): string {
  return template.replace(/\{([a-zA-Z0-9_]+)\}/g, (_, key: string) => {
    const value = variables[key];
    return value === undefined ? `{${key}}` : String(value);
  });
}
