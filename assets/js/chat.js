//  minimal
class AiHubChat {
    constructor(config) {
        this.ajaxUrl = config.ajaxUrl;
        this.nonce = config.nonce;
        this.conversationId = 0;
        this.isStreaming = false;
        this.eventSource = null;
    }
    
    sendMessage(text, provider) { ... }
    appendMessage(role, content) { ... }
    loadHistory() { ... }
    // etc.
}
