using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PointScript : MonoBehaviour
{
    [SerializeField] GameObject cube;
    IEnumerator Spawn()
    {
        for(int i = 0; i < 10; i++)
        {
            for(int j = 0; j < 15; j++)
            {
                for(int k = 0; k < 10; k++)
                {

                
                GameObject temp = Instantiate(cube, new Vector3(
                    transform.position.x + k,
                    transform.position.y + i,
                    transform.position.z + j
                    ), Quaternion.identity);
                temp.GetComponent<MeshRenderer>().material.color = new Color(
                    (float)k / 10,
                    (float)i / 10,
                    (float)j / 10
                    ); 
                yield return new WaitForSeconds(0.01f);
                }
            }
        }
    }
    private void Start()
    {

        StartCoroutine(nameof(SpawnPhyramid), new Vector3(5, 5, 5));
    }


    IEnumerator SpawnPhyramid(Vector3 pos)
    {
        for (int i = 0; i < 10; i++)
        {
            for (int j = 0 + i; j < 10 - i; j++)
            {
                for (int k = 0 + i; k < 10 - i; k++)
                {


                    GameObject temp = Instantiate(cube, new Vector3(
                        pos.x + k,
                        pos.y + i,
                        pos.z + j
                        ), Quaternion.identity);
                    temp.GetComponent<MeshRenderer>().material.color = new Color(
                        (float)k / 10,
                        (float)i / 10,
                        (float)j / 10
                        );
                    yield return new WaitForSeconds(0.01f);
                }
            }
        }
        
    }

}
