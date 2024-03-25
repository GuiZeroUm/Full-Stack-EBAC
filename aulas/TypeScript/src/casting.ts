namespace casting {
    let idade: any = 19;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => console.log(x))

    let nome: string = 19 as unknown as string
}