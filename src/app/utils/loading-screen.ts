export class LoadingScreen{
    static open() {
        const divLoadingScreen = document.getElementById('loading-screen');
        divLoadingScreen?.classList.add('show-spinner');
    }

    static hide() {
        const divLoadingScreen = document.getElementById('loading-screen');
        divLoadingScreen?.classList.remove('show-spinner');
    }

    static isOpen(): boolean {
        const divLoadingScreen = document.getElementById('loading-screen');
        return divLoadingScreen?.classList.contains('show-spinner')!;
    }
}