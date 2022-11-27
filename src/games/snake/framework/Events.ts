export default class Events {
    static dispatch(name: string, detail?: any): boolean {
        return window.dispatchEvent(!detail
            ? new CustomEvent(name)
            : new CustomEvent(name, { detail: detail })
        );
    }

    static off(name: string, action: (event: any) => any) {
        window.removeEventListener(name, action);
    }

    static on(name: string, action: (event: any) => any, once?: boolean): void {
        window.addEventListener(name, action, { once });
    }
}
