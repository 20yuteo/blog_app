import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        // フォールバック UI を表示します
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // レポーティングサーバーに対して、エラーのログを取ることができます
        logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
        // You can render any custom fallback UI
        // どんなカスタムフォールバック UI でもレンダリングできます
        return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}