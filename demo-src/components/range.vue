<template>
	<div class="demo-range">
		<div>
			<p>默认range value:{{v1}}</p>
			<vu-range 
				@input="getV1" 
				@change="">
			</vu-range>
		</div>
		<div>
			<p>预设value value:{{v2}}</p>
			<vu-range 
				:value="20" 
				@input="getV2">
			</vu-range>
		</div>
		<div>
			<p>左右有文字 value:{{v3}}</p>
			<vu-range 
				@input="getV3">
				<div slot="start">
					<span>0</span>
				</div>
				<div slot="end">
					<span>100</span>
				</div>
			</vu-range>
		</div>
		<div>
			<p>自定义步长 value:{{v4}}</p>
			<vu-range 
				:step="10"
				@input="getV4">
			</vu-range>
		</div>
		<div>
			<p>自定义区间 value:{{v5}}</p>
			<vu-range 
				:min="10"
				:max="90"
				@input="getV5">
				<div slot="start">
					<span>10</span>
				</div>
				<div slot="end">
					<span>90</span>
				</div>
			</vu-range>
		</div>
		<div>
			<p>自定义线宽 value:{{v6}}</p>
			<vu-range 
				:bar-height="3"
				@input="getV6">
			</vu-range>
		</div>
		<div>
			<p>置为无效</p>
			<vu-range 
				:disabled="true">
			</vu-range>
		</div>
	</div>
	
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				v1: 0,
				v2: 20,
				v3: 0,
				v4: 0,
				v5: 10,
				v6: 0
			}
		},
		methods:{
			getV1(value){
				this.v1=value;
			},
			getV2(value){
				this.v2=value;
			},
			getV3(value){
				this.v3=value;
			},
			getV4(value){
				this.v4=value;
			},
			getV5(value){
				this.v5=value;
			},
			getV6(value){
				this.v6=value;
			}
		}
	}
</script>