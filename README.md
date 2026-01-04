# 🧩 Origami Conceitual — Fila Circular

> **Arquivo:** README.md

**Aluno:** Eric Vinícius do Santos Oliveira
**Instituição:** IFPI
**Curso/Módulo:** 2º Módulo — Análise e Desenvolvimento de Sistemas
**Disciplina:** Estrutura de Dados
**Professor:** Jivago

---

## ✂️ Ideia do Origami (visual mental)

Imagine uma **tira de papel** dobrada até formar um **anel** (um círculo). Não existe começo nem fim visível — quando você chega ao final, **volta para o início**. Esse anel representa a **Fila Circular**.

* Cada “dobrinha” do papel é uma **posição da fila**.
* Um marcador **INÍCIO (front)** aponta para onde se remove.
* Um marcador **FIM (rear)** aponta para onde se adiciona.
* Ao chegar na última posição, os marcadores **retornam ao começo**.

---

## 🔄 Funcionamento (bem direto)

A **Fila Circular** funciona como uma fila comum (FIFO), mas reaproveita espaços vazios ao “dar a volta” no vetor.

* **FIFO:** o primeiro a entrar é o primeiro a sair.
* **Circular:** quando chega ao fim do vetor, continua do início.

---

## 📌 Tipo Abstrato de Dados — Operações

* **Adicionar no final da fila**
  Insere o elemento na posição indicada por `rear` e avança o ponteiro circularmente.

* **Remover e retornar o primeiro elemento**
  Remove o elemento indicado por `front` (o mais antigo) e avança o ponteiro.

* **Retornar o elemento do início**
  Consulta o valor apontado por `front`, sem remover.

* **Verificar se a fila está vazia**
  Ocorre quando a quantidade de elementos é zero.

* **Verificar se a fila está cheia**
  Ocorre quando a quantidade de elementos atinge a capacidade máxima.

* **Exibir a quantidade de elementos**
  Total atual de itens armazenados.

* **Exibir os elementos da fila**
  Percorre do `front` ao `rear`, respeitando o movimento circular.

* **Retornar a capacidade máxima**
  Tamanho fixo definido para a fila.

* **Exibir quantos elementos ainda podem ser inseridos**
  Capacidade máxima menos a quantidade atual.

---

## ✅ Resumo em uma frase

**Fila Circular é uma fila FIFO implementada sobre um vetor circular, que reaproveita espaços vazios ao retornar ao início quando chega ao fim.**

---

*(Quando você enviar a foto dos requisitos cumpridos, eu integro aqui como seção final ou checklist.)*
