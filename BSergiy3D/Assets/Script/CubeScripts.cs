using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CubeScripts : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        Ray ray = new Ray();
        ray.origin = transform.position;
        ray.direction = transform.forward;
        Debug.DrawRay(ray.origin, ray.direction * 10f, Color.red);
        RaycastHit hit;
        if(Physics.Raycast(ray, out hit))
        {
            MeshRenderer mr = hit.collider.gameObject.GetComponent<MeshRenderer>();
            if(mr.material.color != Color.red)
            {
                mr.material.color = new Color(Random.Range(0f, 1f),
                    Random.Range(0f, 1f),
                    Random.Range(0f, 1f)
                    );
            }
            else
            {
                mr.material.color = Color.white;
            }
            
        }
    }
}
