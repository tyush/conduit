use neon::prelude::*;
use chrono;

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string("hello node"))
}

fn time(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string(chrono::Local::now().format("%H:%M:%S").to_string()))
}

#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("hello", hello)?;
    cx.export_function("time", time)?;
    Ok(())
}
