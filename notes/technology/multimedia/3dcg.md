---
slug: /3dcg
sidebar_label: 3DCG
---

# 3DCG

## シェーダ

モダンな 3D プログラミングでは、通常「シェーダ（shader）」と呼ばれる描画用のプログラムを通して、画面にデータを送るのが普通です。

- Fixed Function Pipeline – シェーダを_使わない_従来型の方法のこと
- Programmable Pipeline – シェーダを_使った_モダンな方法のこと

シェーダは GPU 上で動作することができます。シェーダは、プログラムを動かす度に、その環境の GPU に合わせてコンパイルをします。

シェーダは **シェーディング言語** を用いて実装されます。

### 種類

- Vertex（頂点） – 3D 空間内の頂点座標を画面上の座標にするまでに必要な計算を行います。
- Fragment（断片） – 色の計算を行います。

## OpenGL

### シェーディング言語

<abbr title="OpenGL Shading Language">GLSL</abbr> を使用します。