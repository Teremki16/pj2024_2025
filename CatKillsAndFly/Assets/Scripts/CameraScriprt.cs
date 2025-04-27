using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraScriprt : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    { 
        
        if(!FindObjectOfType<PalyerLauncher>().candrag)
        { 
            Vector3 target = GameObject.Find("CatHead").transform.position;
            transform.position = new Vector3(target.x, target.y, -10);
        }
        
    }
}
