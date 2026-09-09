// No-op stubs. The tool components were ported from lokaltools, which reports job
// telemetry; this site collects nothing and says so on every tool page, so the calls
// are kept (to keep the ported components diffable against their source) but do
// nothing. `logToolError` still writes to the console so failures stay debuggable.
// Shape must match lokaltools' startToolJob return value — the ported components call
// job.success(...) and job.error(...) on it.
export function startToolJob() {
    return { success() { }, error() { } };
}

export function logToolError(toolName, error) {
    console.error(`[${toolName}]`, error);
}
