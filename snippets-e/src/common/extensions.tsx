import { Component } from "react";

declare module 'react' {
    interface Component {
        getName: () => string;
    }
}