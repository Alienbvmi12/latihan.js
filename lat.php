<?php

class p{
	protected $a = "ok";

	function ok(){
		return $this->a;
	}
}

$yes = new p;
echo $yes->ok();