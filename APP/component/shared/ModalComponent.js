const Modal = {
    template: `
        <div class="modal-overlay" @click="cancelar">
            <div class="modal-content" @click.stop>
                <!-- Header do Modal -->
                <div class="modal-header">
                    <h2>{{ title }}</h2>
                </div>

                <!-- Corpo do Modal: Aqui podemos usar um componente dinâmico -->
                <div class="modal-body">
                    <component :is="dynamicComponent"></component>
                </div>

                <!-- Rodapé do Modal -->
                <div class="modal-footer">
                    <button class="btn-cancel" @click="cancelar">Cancelar</button>
                    <button class="btn-confirm" @click="confirmar">Confirmar</button>
                </div>
            </div>
        </div>
    `,
    props: {
        title: String,
        onConfirm: Function,
        onCancel: Function,
        dynamicComponent: Object // O componente dinâmico passado para o corpo
    },
    methods: {
        confirmar() {
            this.onConfirm();
            this.fecharModal();
        },
        cancelar() {
            this.onCancel();
            this.fecharModal();
        },
        fecharModal() {
            this.$el.remove(); // Remove o modal do DOM
        }
    }
};
